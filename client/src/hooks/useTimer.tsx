// const useTimer = () => {
//   const [runCountdown, setRunCountdown] = useState(false);
//   const [countdown, setCountdown] = useState(0);

//   useEffect(() => {
//     if (runCountdown) {
//       const interval = setInterval(() => {
//         if (countdown <= 0) {
//           console.log("GAME OVER");
//           isHighscore({ name, score });
//           return clearInterval(interval);
//         }

//         setCountdown(countdown - 1000);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [countdown, runCountdown]);
// };

// export default useTimer;
