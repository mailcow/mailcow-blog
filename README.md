# mailcow-blog [![github pages](https://github.com/mailcow/mailcow-blog/actions/workflows/update-blog.yml/badge.svg?branch=master)](https://github.com/mailcow/mailcow-blog/actions/workflows/update-blog.yml)

Project page and blog of [mailcow: dockerized](https://mailcow.email), built with [Hugo](https://gohugo.io) and the in-repo theme `themes/mailcow`. The design follows the servercow theme of the mailcow UI (colors, fonts, cards).

## Local preview

1. Install Hugo **extended 0.147 or newer** ([installation guide](https://gohugo.io/installation/)).
2. Run `hugo server` in the repository and open http://localhost:1313.

## Writing posts

- Every post is a folder under `content/posts/<year>/` with `index.en.md` and `index.de.md`. New posts: `hugo new posts/2026/my-post/index.en.md`.
- **One category per post:**

  | Category (en) | Category (de) | Used for |
  |---|---|---|
  | `Updates` | `Updates` | Release notes. These posts appear under *Releases* and on the start page. |
  | `Security` | `Sicherheit` | Security advisories and CVEs that are not release notes |
  | `News` | `News` | Announcements, status updates, community |
  | `Guides` | `Anleitungen` | How-tos |

- **Release posts:** name the folder `release-YYYY-MM` and start each revision with a heading like `## 2026-12a (Release: 12th December 2026)`. The version chips are read from these headings.
- **Tags** are the same in both languages and written exactly like this:
  - Type of update: `Security` (shows the security badge), `Major`, `Hotfix`, `Bugfix`, `CVE`
  - Components: `Postfix`, `Dovecot`, `Rspamd`, `SOGo`, `ClamAV`, `MariaDB`, `Redis`, `Nginx`, `PHP`, `Unbound`, `Olefy`, `Netfilter`, `Docker`
  - Topics: `ARM64`, `2FA`, `Identity Provider`, `LDAP`, `OIDC`, `Keycloak`, `authentik`, `Spamhaus`, `DNSBL`, `MTA-STS`, `Full-text search`, `imapsync`, `UI`, `CORS`, `IPv6`, `Debian`, `Alpine`, `Installation`, `Upgrade`, `Hosting`, `Nightly`, `Documentation`, `Demo`, `Community`

  No year tags: the archive is sorted by date anyway.
- Optional front matter: `featuredImage` (shown on the news cards and above the post), `description` (card text), `toc: false`.
- Boxes: `{{< admonition warning "Title" >}} … {{< /admonition >}}` with the types `note`, `info`, `tip`, `success`, `question`, `warning`, `danger`.

## Roadmap

The roadmap page and the start page read `data/roadmap.yaml`. Both show three columns by status (planned, in development, testing in nightly) with title and short description per item; the start page shows the first three per column. Each item has a `status` (`planned`, `progress`, `nightly`, `released`), `title` and `description` in `en`/`de` and optionally `release`, `issue`, `pr`, `docs` and, for released items, `area`. Update `updated` when you change the file. Released items link to their release post automatically.

## managed mailcow & support (servercow)

Products link straight to their pages in the servercow customer portal (`https://cp.servercow.de/product/...`): managed mailcow, the four support packages, Dedicated Piler, BackupcowMX and the Stay Awesome License. The portal has no overview of the support packages, so the *Support packages* entry links to the comparison on servercow.de (`https://servercow.de/mailcow/#help`, English `https://servercow.de/en/mailcow/#help`) and lists the four packages as direct links. General links (header button, hint on the start page) go to `https://servercow.de/mailcow/` or `https://servercow.de/en/mailcow/`. All URLs are set per language in `config.toml` (params `servercow`, `managed`, `support`, `sal`, `quote` and the *Products* menu).

## Verified VPS providers

The cards and the comparison table on `/vps/` come from `data/vps.yaml` (shortcode `{{< vps-providers >}}` in `content/vps/`). Per provider: `name`, `country` (company), `locations` (city, optional `city_de`, country code), `arch`, `ipv6`, `network` (`very-good` or `good-very-good`), `mailPorts` (`open` or `on-request`), `url` and `audience` in `en`/`de`. New country codes need a name in `countries`.

## Search engines and sharing

- **Title and description:** every page uses `description` from its front matter as meta description. Set it for every post; without it, release posts get a generated text and other posts their first sentences. `seoTitle` replaces the whole `<title>`, `noindex: true` keeps a page out of search engines.
- **Images for sharing:** `featuredImage` is used for Open Graph and X/Twitter (1200×630 px works best). Pages without one use `static/images/og-default.png`.
- **Structured data:** the theme adds JSON-LD automatically: organisation and website on every page, `SoftwareApplication` with the current version on the start page, `BlogPosting` for posts and breadcrumbs.
- `robots.txt` points to the sitemap. The workflow checks out the full git history so that `lastmod` in the sitemap is the real date of the last change.

## Deployment

Pushing to `master` builds the site with GitHub Actions and publishes it to GitHub Pages.

## Credits

Icons: [Lucide](https://lucide.dev) (ISC) and [Simple Icons](https://simpleicons.org) (CC0). Fonts: Poppins (OFL) and Roboto Slab (Apache 2.0).
