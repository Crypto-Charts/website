let preview, configSample

document.addEventListener("DOMContentLoaded", function() {
	preview = document.getElementById("preview")
	configSample = document.getElementById("configSample")
	
	hljs.initHighlightingOnLoad()
})

function hidePreview() {
	preview.style.display = "none"
}

function showConfigSample() {
	configSample.style.display = "block"
}