<template>
  <footer aria-label="site footer">
    <div id="foot-fill1" />
    <div id="logos">
      <a
        id="logo-link"
        href="http://www.syke.fi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="logo" src="@/assets/images/logo.png" alt="Syke logo" />
      </a>
    </div>
    <div id="copyright-and-social">
      <span id="copyright" aria-label="site copyright">
        {{ $t('$footerCopyright') }}
      </span>
      <br />
      <div id="social">
        {{ $t('$share') }}
        <a
          href="https://twitter.com/share?url=https://ilmastodieetti.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/images/icons/tw.png" alt="twitter share icon" />
        </a>
        <a
          :href="'https://www.facebook.com/sharer/sharer.php?u=https://ilmastodieetti.fi'"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/images/icons/fb.png" alt="facebook share icon" />
        </a>
      </div>
      <br />
      <div v-if="$i18n.locale === 'sv'">
        <img id="canemure" src="@/assets/images/canemure.png" alt="Syke logo" />
        <p id="canemure-text">
          För att skapa den här webbplatsen har finansiering erhållits från
          Europeiska unionens LIFE-program. Innehållet på webbplatsen
          representerar endast Canemure-projektets perspektiv och EASME /
          Kommissionen ansvarar inte för eventuell användning av informationen
          på webbplatsen.
        </p>
      </div>
    </div>
    <div id="footer-links" aria-label="site links">
      <router-link to="calculationInfo">
        {{ $t('$calculationInfo') }}
      </router-link>
      <router-link to="privacyNotice">
        {{ $t('$privacyNotice') }}
      </router-link>
      <router-link to="serviceDescription">
        {{ $t('$serviceDescription') }}
      </router-link>
      <router-link to="accessibility">
        {{ $t('$accessibility') }}
      </router-link>
      <router-link to="termsOfUse">
        {{ $t('$termsOfUse') }}
      </router-link>
      <a
        href="https://rajapinnat.ymparisto.fi/api/ilmastodieetti/swagger"
        target="_blank"
        rel="noopener"
      >
        API
      </a>
      <a
        href="https://github.com/sykefi/climatediet"
        target="_blank"
        rel="noopener"
      >
        {{ $t('$openSource') }}
      </a>
      <a
        href="https://github.com/sykefi/climatediet/releases"
        target="_blank"
        rel="noopener"
      >
        {{ $t('$changeLogLink') }}
      </a>
      <a href="mailto:ilmastotohtori@syke.fi">ilmastotohtori@syke.fi</a>
    </div>
    <div id="foot-fill2" />
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
footer {
  width: 100%;
  background: $footer-background;
  color: $text-light;
  font-size: $font-size-m;
  font-weight: $semi-bold;
  display: flex;
  align-content: center;
  text-align: center;
}

#fill1,
#fill2 {
  flex-grow: 1;
}

#logo {
  margin: 0px auto;
  max-height: 80%;
  max-width: 8em;
}

#canemure {
  margin: 0px auto;
  max-height: 80%;
  max-width: 18em;
}

#canemure-text {
  font-size: $font-size-xs;
}

#copyright-and-social {
  flex-grow: 1;
}

#copyright {
  border-bottom: 1px solid white;
}

#footer-links {
  text-align: left;
  margin: 1em;
  font-weight: bold;
  a {
    display: block;
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: $link-light;
    }
  }
}

#social {
  margin-top: 0.5em;
  display: inline-flex;
  align-items: center;
  a {
    display: inline-block;
    margin-left: 0.5em;
  }
}

@supports (display: grid) {
  footer {
    display: grid;
    align-items: center;
    grid-template: '. logo copyright links .' auto / 1fr 12em 2fr 12em 1fr;
  }

  @media (max-width: 500px) {
    footer {
      justify-items: center;
      grid-template:
        'links' auto
        'copyright' auto
        'logo' minmax(100px, auto) / auto;
    }
    #footer-links {
      text-align: center;
    }
  }

  #logo-link {
    grid-area: logo;
    margin: 1em;
  }

  #copyright-and-social {
    grid-area: copyright;
  }

  #footer-links {
    grid-area: links;
  }
}
</style>
