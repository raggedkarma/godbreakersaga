const CACHE_NAME = "rgk-godbreaker-assets"

self.addEventListener("install", e => {
    e.waitUntil(async () => {
        const cache = await caches.open(CACHE_NAME)
        console.log("install", { cache })
        return cache.addAll([
            "/",
            "/style.css",
            "/bootstrap.min.css",
            "/bootstrap.min.css.map",
            "/index.html",
            "/rules/",
            "/rules/index.html",
            "/rules/advanced.html",
            "/rules/circles.html",
            "/rules/gameplay.html",
            "/rules/traits.html",
            "/scenarios/",
            "/scenarios/index.html",
            "/scenarios/clash.html",
            "/scenarios/gathering.html",
            "/scenarios/nest.html",
            "/scenarios/score.html",
            "/scenarios/tragedy.html",
            "/scenarios/trap.html",
            "/resources/",
            "/resources/index.html",
            "/resources/fonts/Fh4hPjjqNDz1osh_jX9YfjudpBJBNV5y5wf_k1i5Lz9kd4qaQvGN_tie.woff",
            "/resources/fonts/HI_OiY8KO6hCsQSoAPmtMYebvpCfOMPT.woff2",
            "/resources/fonts/j8_v6-zQ3rXpceZj9cqnViF-Pn6ASb_F.woff2",
        ]).catch(reason => {
            console.log("failed cache", { reason })
        })
    })
})

self.addEventListener("fetch", event => {
    const { request } = event
    if ( !request.method === "GET" || request.headers.get("accept").includes(["application/pdf"])) {
        return
    }

    event.respondWith(
        caches.match(request).then(cachedResponse =>
            fetch(request).then(response => {
                // update the cache with a clone of the network response
                const responseClone = response.clone()
                caches.open(CACHE_NAME).then(cache => {
                    console.log("cache.update", {request, response})
                    cache.add(request, responseClone)
                })
                return response
            }).catch(() => cachedResponse)
        )
    )
})