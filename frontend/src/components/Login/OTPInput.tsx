import { useRef } from "react";

interface InputBox {
  inputBox: string[];
  setInputBox: React.Dispatch<React.SetStateAction<string[]>>;
}

const OTPInput = ({ inputBox, setInputBox }: InputBox) => {
  const inputReference = useRef<any[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newValue = [...inputBox];
    newValue[index] = e.target.value;
    if (e.target.value && index < inputBox.length - 1) {
      inputReference.current[index + 1].focus();
    }
    setInputBox(newValue);
  };

  const handleBackSpace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (index > 0 && inputBox[index] === "") {
        const newInput = [...inputBox];
        newInput[index - 1] = "";
        inputReference.current[index - 1].focus();
        setInputBox(newInput);
      }
    }
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      {inputBox.map((digit, index) => {
        return (
          <input
            className="w-10 h-10 text-black text-center text-xl rounded-md"
            maxLength={1}
            autoFocus={index === 0}
            key={index}
            type="text"
            value={digit}
            ref={(ref) => (inputReference.current[index] = ref)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
