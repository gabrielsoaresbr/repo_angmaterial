Fonte: http://www.macoratti.net/18/07/ang_material2.htm

URL publicada: https://gabrielsoaresbr.github.io/repo_angmaterial

Deploy Github Pages: https://alligator.io/angular/deploying-angular-app-github-pages/
	- First install the angular-cli-ghpages globally: npm install -g angular-cli-ghpages
	- Now use the Angular CLI with the --base-href flag to build your project and set the correct base href location: ng build --prod --base-href "https://<user-name>.github.io/<repo>/"
	- Then it’s as simple as running angular-cli-ghpages. You can use the ngh shorthand: ngh
	- And done! Your app will now be hosted at https://username.github.io/app-name/