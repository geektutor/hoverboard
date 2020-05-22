import { html, PolymerElement } from '@polymer/polymer';
import '../elements/footer-block';
import '../elements/hero-block';
import '../elements/md-content';
import '../elements/polymer-helmet';

class RegisterPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <polymer-helmet
        title="Register Page"
        description="{$ heroSettings.faq.metaDescription $}"
        active="[[active]]"
      ></polymer-helmet>

      <hero-block
        background-image="{$ heroSettings.faq.background.image $}"
        background-color="{$ heroSettings.faq.background.color $}"
        font-color="{$ heroSettings.faq.fontColor $}"
        active="[[active]]"
      >
        <div class="hero-title">Register</div>
        <p class="hero-description">Kindly fill the form below with necessary details. A link to the Telegram Channel where further information will be shared will be sent to your mail after registering.</p>
      </hero-block>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUlSBALGWWLjP71fh9icxY5Y-EiMVZ4BTHEbz4OCDJpA3F7A/viewform?embedded=true" width="300" height="1400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      <footer-block></footer-block>
    `;
  }

  static get is() {
    return 'register-page';
  }

  static get properties() {
    return {
      active: Boolean,
      source: {
        type: String,
        value: '{$ register $}',
      },
    };
  }
}

window.customElements.define(RegisterPage.is, RegisterPage);
