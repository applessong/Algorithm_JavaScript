function solution(routes) {
  var answer = 1;

  routes.sort((a, b) => a[0] - b[0]);

  let camera = [routes[0][0], routes[0][1]];

  for (let i = 1; i < routes.length; i++) {
    if (camera[1] >= routes[i][0]) {
      let endpoint = camera[1] >= routes[i][1] ? routes[i][1] : camera[1];
      camera = [routes[i][0], endpoint];
    } else {
      answer++;
      camera = [routes[i][0], routes[i][1]];
    }
  }
  return answer;
}

// function solution(routes) {
//     var answer = 1;

//     routes.sort((a, b) => a[0] - b[0]);

//       let camera = [routes[0][0], routes[0][1]];

//       for (let i = 1; i < routes.length; i++) {
//           if (camera[1] < routes[i][0]) {
//               answer++
//               camera = [routes[i][0], routes[i][1]];
//           }else if (camera[1] > routes[i][1]) {
//               camera = [routes[i][0],routes[i][1]];
//           }
//     }
//     return answer;
//   }

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ]),
);
//2
