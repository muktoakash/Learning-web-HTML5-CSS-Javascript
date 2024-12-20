var txt = "";
txt += "<li><strong>Code Name:</strong> " + navigator.appCodeName;
txt += "<li><strong>App Name:</strong> " + navigator.appName;
txt += "<li><strong>App Version:</strong> " + navigator.appVersion;
txt += "<li><strong>User Agent</strong> " + navigator.userAgent;
txt += "<li><strong>Language:</strong> " + navigator.language;
txt += "<li><strong>Platform:</strong> " + navigator.platform;

document.getElementById("info").innerHTML = txt;
