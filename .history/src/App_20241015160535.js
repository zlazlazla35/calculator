import styled from "styled-components";
import './App.css';
import {  useEffect, useRef, useState } from 'react';

let Calculating = styled.div`
  width : 100%;
  margin : 0 auto;
`

let Btnbox = styled.div`
  width : 100%
  background-color: #fff;
  font-size : 18px;
  border-radius: 35%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap : 10px 10px;
`

let Btn = styled.button`
  width : 100%;
  background-color: ${ props => props.bg };
  color : ${props =>  props.bg == '#8630f5' ? '#fff' :  '#000'  };
  font-size : 18px;
  border-radius: 20%;
  height : 50px;
  border: none;
  box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.3);
  transition-duration: 0.3s;
`

let ZeroBtn = styled.button`
  width : 100%;
  background-color: #eee;
  font-size : 18px;
  border-radius: 20%;
  height : 50px;
  border: none;
  box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.3);
  grid-column: 1/3;
  transition-duration: 0.3s;
`




function App() {

  const [num, setNum] = useState("");
  const [afterNum, setAfterNum] = useState("");

  const [oper, setOper] = useState("");
  const [oper2, setOper2] = useState(false);
  const output = useRef()



  const getNum = (e)=>{
    if(oper2 == false){
      setNum( (prev) => prev + e.target.value );
    }

    if(oper2 == true){
      setAfterNum( (prev) => prev + e.target.value  ) 
    }

  }

  const getOper = (e)=>{
    setOper( () => e.target.value );
    setOper2(true);

      calResult();
      click(e.target )
  }


  const calResult = ()=>{
    switch(oper){
      case '+':
        let result = num
        result =  Number(num) + Number(afterNum) 
        setNum(result);
        setAfterNum("")
        break;

      case '-':
        let result2 = num
        result2 =  Number(num) - Number(afterNum) 
        setNum(result2)
        setAfterNum("")
        break;

      case '*':
        let result3 = num
        result3 =  Number(num) * Number(afterNum) 
        setNum(result3)
        setAfterNum("")
        break;

      case '÷':
        let result4 = num
        result4 =  Number(num) / Number(afterNum) 
        setNum(result4)
        setAfterNum("")
        break;

    }

  }


  useEffect(()=>{
    if(oper == "="){
      setOper("")
    }if(oper == "del"){
      setNum("");
      setAfterNum("");
      setOper("");
      setOper2(false);
      output.current.style.color = '#fff'
    }else{
            output.current.style.color = '#232323'
    }
  }, [oper])



  // useEffect(()=>{
  //   console.log(output.current)
  // }, [output])

  function click(a){
    console.log(a)
  }


  return (
    <div className="App">
      <div className="contents">
        <Calculating>
            <input className="output" ref={output} value={ num + oper  + afterNum  }/>
          <Btnbox>
            {/* <Btn value='ac' onClick={getOper} bg="#8630f5">AC</Btn> */}
            <Btn value='del' style={{gridColumn : '1/3'}} onClick={getOper} bg="#8630f5">DEL</Btn>
            <Btn value='%' onClick={getOper} bg="#8630f5">%</Btn>
            <Btn value='÷' onClick={getOper} bg="#8630f5">÷</Btn>
            <Btn value={7} onClick={getNum}>7</Btn>
            <Btn value={8} onClick={getNum}>8</Btn>
            <Btn value={9} onClick={getNum}>9</Btn>
            <Btn value='*' onClick={getOper}  bg="#8630f5">*</Btn>
            <Btn value={4} onClick={getNum}>4</Btn>
            <Btn value={5} onClick={getNum}>5</Btn>
            <Btn value={6} onClick={getNum}>6</Btn>
            <Btn value='-'  onClick={getOper}  bg="#8630f5">-</Btn>
            <Btn value={1} onClick={getNum}>1</Btn>
            <Btn value={2} onClick={getNum}>2</Btn>
            <Btn value={3} onClick={getNum}>3</Btn>
            <Btn value="+"  onClick={getOper} bg="#8630f5">+</Btn>
            <ZeroBtn value={0} onClick={getNum}>0</ZeroBtn>
            <Btn value='.' onClick={getNum}>.</Btn>
            <Btn value='='  onClick={getOper} bg="#8630f5"> =</Btn>
          </Btnbox>
        </Calculating>
      </div>
    </div>
  );
}

export default App;

// 버튼 클릭시 그 버튼한테 active 클레스명 잠깐 붙였다가 떼어주기