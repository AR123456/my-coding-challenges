var filter = function (arr, fn) {
  var filteredArr = [];

  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });

  return filteredArr;
};

/* A real-life use case for the filter function implemented as: is in situations where you need to filter and process data in an array in a way that requires custom conditions or transformations. Here's an example use case:

Use Case: Processing User Preferences

Imagine you have an application that allows users to set their preferences for different features. Each user preference is represented as an object with properties like feature, enabled, and priority. The array of preferences might look like this: */

var userPreferences = [
  { feature: "notifications", enabled: true, priority: 2 },
  { feature: "darkMode", enabled: true, priority: 1 },
  { feature: "language", enabled: false, priority: 3 },
  // ... more preferences ...
];
///////Get only the enabled preferences:
var enabledPreferences = filter(userPreferences, (pref) => pref.enabled);
console.log(enabledPreferences);
// Output:
// [
//   { feature: 'notifications', enabled: true, priority: 2 },
//   { feature: 'darkMode', enabled: true, priority: 1 }
// ]

/////////Get the preferences with a priority greater than 1:
var highPriorityPreferences = filter(
  userPreferences,
  (pref) => pref.priority > 1
);
console.log(highPriorityPreferences);
// Output:
// [
//   { feature: 'notifications', enabled: true, priority: 2 },
//   { feature: 'language', enabled: false, priority: 3 }
// ]
///////Get preferences with a specific feature:
var languagePreference = filter(
  userPreferences,
  (pref) => pref.feature === "language"
);
console.log(languagePreference);
// Output:
// [
//   { feature: 'language', enabled: false, priority: 3 }
// ]
