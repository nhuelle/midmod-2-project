function Random(props) {
        var maxNumber = 45;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        return <div>{randomNumber}</div>;
      }

      export default Random;