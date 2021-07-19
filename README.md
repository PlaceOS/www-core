# Core Web Interfaces

Repository for builds of the core user interfaces assets for interacting with PlaceOS.

# index.html
index.html has the following behaviour:
* Checks /auth/authority for a `default_app` config
* If there is config, it redirects to that app, otherwise redirects to /backoffice/ as a fallback
* If the /auth/authority request fails it retries with exponential back-off until the request succeeds
* e.g. `"default_app": "/staff/"`
