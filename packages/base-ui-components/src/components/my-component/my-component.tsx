import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * Contact description
   */
  @Prop() description: string;
  /**
   * Contact description
   */
  @Prop() endPoint: string;

  @State() name: string;
  @State() email: string;
  @State() message: string;

  handleNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  handleEmailChange(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  handleMessageChange(event: Event) {
    this.message = (event.target as HTMLTextAreaElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      console.log(this.name, this.email, this.message);
    }
  }

  validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(this.email);
    return isEmailValid;
  }

  render() {
    return <div>
      <section class="contact-us" id="contact-section">
        <form id="contact">
          <div class="section-heading">
            <h4>Contact me</h4>
          </div>
          <div class="section-description">
            <h4>{this.description}</h4>
          </div>
          <div class="inputField">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            minlength={2}
            maxlength={50}
            value={this.name}
            onInput={this.handleNameChange.bind(this)}
          />
          </div>
          <div class="inputField">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            value={this.email}
            onInput={this.handleEmailChange.bind(this)}
          />
          {this.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email) && <span class="error">Please enter a valid email address.</span>}
          </div>
          <div class="inputField">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            minlength={10}
            maxlength={500}
            value={this.message}
            onInput={this.handleMessageChange.bind(this)}
          ></textarea>
          </div>
          <div class="inputField btn">
            <div id="form-submit" class="main-gradient-button" onClick={this.handleSubmit.bind(this)}>Send a message</div>
          </div>
        </form>
      </section>
    </div>;
  }
}
