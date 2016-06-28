# TaskIt

A task/todo app that takes the Redux/React todo app a little further.

In order to run, clone the repo, npm install to install the dependencies, and npm start. Navigate to localhost:8080. Best viewed in Chrome :)

This app takes a boilerplate I've been cobbling together with Babel and its many presets, Webpack, Hot Reload, and all the react and redux stuff. It also takes advantage of LocalStorage (I think this doesn't work in IE), the Redux dev tools in Chrome, and Hot Reloading (not CSS tho - I just couldn't get this to work with webpack - it's being imported in the index.html).

It should address all of the reqs in the challenge except for making lists shareable, which I just couldn't figure how to do without either wiring up a database/hooking up an API or bringing in nodemailer. Even the Google Tasks API, which I had thought about using, doesn't have shareability as part of the API layer. I just saw a presentation on RethinkDB - that seems like an interesting candidate for storing some JSON, perhaps something I'll explore later.

There are UI issues that are killing me, but I'll leave them for another day. I was mostly focused on trying to create an app completely from scratch, and doing it a little differently than the usual React/Redux Todo tutorials do.
