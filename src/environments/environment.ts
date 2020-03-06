// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  simulations: {
    components: [
      {
        title: 'Thanos\' Snap effect',
        link: '/thanos-snap',
        image: 'assets/images/thanos-snap.jpg'
      },
      {
        title: 'Elastic collision',
        link: '/elastic-collision-of-blocks-to-calculate-digits-of-pi',
        image: 'https://i.stack.imgur.com/Vf8S3.png'
        // If the link doesn't work, use the image from the assets
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
