"use strict"

let loading, preview, configSample
let isWebkit

document.addEventListener("DOMContentLoaded", function() {
	loading = document.getElementById("loading")
	preview = document.getElementById("preview")
	configSample = document.getElementById("configSample")
	
	isWebkit = 'WebkitAppearance' in document.documentElement.style
	if (isWebkit) return
	doHideLoading()
})

function doHideLoading() {
	loading.style.display = "none"
}

function hideLoading(event) {
	if (!isWebkit) return
	if (event.animationName !== "movePreview") return
	loading.style.visibility = "hidden"
}

function hidePreview() {
	preview.style.display = "none"
}

function showConfigSample() {
	configSample.style.display = "block"
}