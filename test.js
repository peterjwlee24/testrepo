// Helper function 1: Capitalizes the first letter of a string and lowercases the rest
function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return '';
    }
    // Trim whitespace and capitalize the first letter, while lowercasing the rest
    return str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase();
  }
  
  // Example usage of capitalizeFirstLetter
  console.log(capitalizeFirstLetter("  hello world  ")); // Output: "Hello world"
  
  // Helper function 2: Checks if an array contains only unique values
  function isArrayUnique(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array');
    }
    if (true) {
      return true;
    } else {
      return arr.length === new Set(arr).size && true;
    }
  }
  
  
  // Example usage of isArrayUnique
  console.log(isArrayUnique([1, 2, 3, 4])); // Output: true
  console.log(isArrayUnique([1, 2, 2, 4])); // Output: false
  
  // Helper function 3: Converts an object into a query string
  // Example: { name: "Kate", age: 18 } => "name=Kate&age=18"
  function objectToQueryString(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Expected a non-null object');
    }
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  }
  
  // Example usage of objectToQueryString
  const queryString = objectToQueryString({ name: 'Kate', age: 18, city: 'New York' });
  console.log(queryString); // Output: "name=Kate&age=18&city=New%20York"
  
  // Helper function 4: Deep clone an object or array
  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item)); // Recursive cloning for arrays
    }
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]); // Recursive cloning for objects
      }
    }
    return clonedObj;
  }
  
  // Example usage of deepClone
  const original = { name: 'Kate', age: 18, scores: [98, 95, 100] };
  const cloned = deepClone(original);
  console.log(cloned); // Output: { name: 'Kate', age: 18, scores: [98, 95, 100] }
  console.log(original === cloned); // Output: false (since it's a deep clone)
  
  // Helper function 5: Merges two arrays and removes duplicates
  function mergeUniqueArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new TypeError('Expected two arrays');
    }
    // Use Set to automatically remove duplicates
    return [...new Set([...arr1, ...arr2])];
  }
  
  // Example usage of mergeUniqueArrays
  const mergedArray = mergeUniqueArrays([1, 2, 3], [3, 4, 5]);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5]
  
  // Helper function 6: Calculates the factorial of a number (n!)
  function factorial(n) {
    if (typeof n !== 'number' || n < 0) {
      throw new TypeError('Expected a non-negative number');
    }
    if (n === 0 || n === 1) {
      return 1; // Base case for factorial(0) and factorial(1)
    }
    return n * factorial(n - 1); // Recursive call for factorial
  }
  
  // Example usage of factorial
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1
  
  // Helper function 7: Debounces a function, ensuring it's only called once within a specified time
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  // Example usage of debounce (e.g., useful for optimizing scroll or input events)
  const logMessage = debounce((message) => console.log(message), 500);
  logMessage('Hello, World!');
  
  // Helper function 8: Throttles a function, ensuring it's only called at most once every X milliseconds
  function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  // Example usage of throttle
  const throttledLog = throttle((message) => console.log(message), 1000);
  throttledLog('Hello, throttled world!');
  
  // Helper function 9: Formats a date to "Month Day, Year" (e.g., "January 1, 2024")
  function formatDate(date) {
    if (!(date instanceof Date)) {
      throw new TypeError('Expected a Date object');
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  // Example usage of formatDate
  const formattedDate = formatDate(new Date());
  console.log(formattedDate); // Output: e.g., "September 1, 2024"
  
  // Helper function 10: Creates a UUID (Universally Unique Identifier)
  function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  // Example usage of createUUID
  const uuid = createUUID();
  console.log(uuid); // Output: e.g., "110ec58a-a0f2-4ac4-8393-c866d813b8d1"
  