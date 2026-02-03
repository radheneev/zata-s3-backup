=== ZATA S3 Backup ===
Contributors: radheneev
Tags: backup, s3, object storage, database backup, site backup
Requires at least: 5.8
Tested up to: 6.9
Stable tag: 1.0.7
License: MIT
License URI: https://opensource.org/licenses/MIT

Backup your site database, themes, and plugins and upload them to ZATA or any S3-compatible object storage.

== Description ==

ZATA S3 Backup allows you to create secure backups of your site database, themes, and plugins and store them in ZATA Object Storage or any S3-compatible storage provider.

The plugin is designed to be lightweight, transparent, and easy to use, without relying on external SaaS services.

= Features =
* Database backup
* Themes backup
* Plugins backup
* Support for ZATA Object Storage (default)
* Support for S3-compatible providers
* Manual and scheduled backups
* Email notifications
* Retention policy
* Logs and history
* No data tracking or telemetry

== Installation ==

1. Upload the plugin folder to the `/wp-content/plugins/` directory, or install via Plugins → Add New → Upload Plugin.
2. Activate the plugin through the ‘Plugins’ menu in WordPress.
3. Go to **ZATA S3 Backup** in the admin menu.
4. Configure your storage credentials and backup settings.

== Configuration ==

You will need:
* Bucket name
* Access Key
* Secret Key
* Endpoint URL (for S3-compatible providers)

ZATA storage is selected by default.

== Frequently Asked Questions ==

= Does this plugin send data to external servers? =
No. All backups are uploaded only to the storage destination configured by you.

= Is shell_exec or system commands used? =
No. The plugin uses PHP and WordPress-native APIs only.

= Can I restore backups automatically? =
Currently, restore is a manual process.
== External services ==

This plugin can connect to an external S3-compatible object storage service in order to upload your backup archives (database export and optional theme/plugin archives).

Service used:
- An S3-compatible object storage endpoint configured by the site administrator.
- By default, the plugin is pre-filled for ZATA (S3-compatible storage). The administrator can change the endpoint to another provider.

What data is sent and when:
- When you click “Test Connection”, the plugin performs a read/write/delete test object in the configured bucket.
- When you run a backup (manual or scheduled), the plugin uploads the generated backup archive files to the configured bucket.

Data transmitted to the storage service:
- Bucket name, object key/path prefix, file contents of the backup archives.
- Request metadata required by the S3 API (timestamps, content hash) and an authorization signature (AWS Signature Version 4).
- Your secret key is used locally to create the request signature and is not sent as plain text.

Conditions:
- Transfers occur only if remote storage is configured and you initiate a test/backup (or enable scheduling).
- You can disable remote uploads by clearing the endpoint/bucket/keys.

Terms and privacy:
- If you use ZATA, please review the service terms and privacy policy:
  - Terms: https://zata.ai/zataprivacypolicies.pdf
  - Privacy: https://zata.ai/zataprivacypolicies.pdf
- If you use another S3-compatible provider, refer to that provider’s terms and privacy policy.

