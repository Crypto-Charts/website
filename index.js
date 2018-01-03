let loading, preview, configSample
let isWebkit

document.addEventListener("DOMContentLoaded", function() {
	loading = document.getElementById("loading")
	preview = document.getElementById("preview")
	configSample = document.getElementById("configSample")
	
	isWebkit = 'WebkitAppearance' in document.documentElement.style
	if (!isWebkit) {
		loading.style.display = "none"
	}
	
	hljs.initHighlightingOnLoad()
})

function hideLoading(event) {
	if (!isWebkit) return
	if (event && event.animationName != "movePreview") return
	loading.style.visibility = "hidden"
}

function showLoading() {
	if (!isWebkit) return
	loading.style.visibility = "visible"
}

function hidePreview() {
	preview.style.display = "none"
}

function showConfigSample() {
	configSample.style.display = "block"
}