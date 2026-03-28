import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerator() {

    const [Password, setPassword] = useState("")

    let [range, setRange] = useState(8)
    let handleRange = (event) => {
        setRange(Number(event.target.value))
    }

    const [isUppercase, setisUppercase] = useState(false)
    const [isLowercase, setisLowercase] = useState(false)
    const [isNumbers, setisNumbers] = useState(false)
    const [isSymbol, setisSymbol] = useState(false)

    // console.log(range)
    let GeneratePass = useCallback(() => {
        let pass = '';

        let uppercaseLetters = "ABCDEFGHIJKLMNOPRSTUWXYZ";
        let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789"
        let symbols = "~!@#$%^&*_";

        let str = '';
        if (isUppercase) str += uppercaseLetters
        if (isLowercase) str += lowercaseLetters
        if (isNumbers) str += numbers
        if (isSymbol) str += symbols

        // console.log(uppercaseLetters[0])

        if (str.length === 0) {
            return "Select at least one option";
        }
        for (let i = 0; i < range; i++) {
            let char = str.charAt(Math.floor(Math.random() * str.length));
            pass += char;
        }
        // setPassword(pass)
        return pass;

    }, [range, isUppercase, isLowercase, isNumbers, isSymbol, setPassword])

    // let pass = GeneratePass();
    // console.log(pass)



    useEffect(() => {
        handlePassGen()
    }, [range, isUppercase, isLowercase, isNumbers, isSymbol, setPassword])


    let handlePassGen = () => {
        let pass = GeneratePass();
        console.log(pass)
        setPassword(pass)
    }

    let passRef = useRef()


    let copyPassword = useCallback(() => {
        passRef.current?.select()
        // passRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(Password)
    }, [Password])
    return (
        <div className="bg-[#121212] text-white w-[40vw] p-10 rounded-2xl flex flex-col gap-6 shadow-lg border border-gray-800">

            {/* Password Display */}
            <div className="flex items-center gap-2">
                <input
                    ref={passRef}
                    type="text"
                    readOnly
                    value={Password}
                    className="flex-1  bg-gray-800 px-7 py-4 rounded-xl outline-none text-sm tracking-wide"
                />
                <button className="bg-blue-600 hover:bg-blue-500 transition px-4 py-3 rounded-xl text-lg font-semibold hover:cursor-pointer" onClick={copyPassword}>
                    Copy
                </button>
            </div>

            {/* Length */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between text-lg text-gray-400">
                    <label>Password Length</label>
                    <span>{range}</span>
                </div>
                <input
                    type="range"
                    min="8"
                    max="30"
                    value={range}
                    onChange={handleRange}
                    className="w-full accent-blue-600 cursor-pointer"
                />
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-4 text-lg">

                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" onChange={() => { setisUppercase(prev => !prev) }} className="accent-blue-600 hover:cursor-pointer" />
                    Uppercase
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" onChange={() => { setisLowercase(prev => !prev) }} className="accent-blue-600 hover:cursor-pointer" />
                    Lowercase
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" onChange={() => { setisNumbers(prev => !prev) }} className="accent-blue-600 hover:cursor-pointer" />
                    Numbers
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" onChange={() => { setisSymbol(prev => !prev) }} className="accent-blue-600 hover:cursor-pointer" />
                    Symbols
                </label>

            </div>

            <button onClick={handlePassGen} className="bg-green-600 hover:bg-green-500 transition py-3 rounded-xl font-semibold text-lg hover:cursor-pointer">
                Generate Password
            </button>

        </div>
    )
}

export default PasswordGenerator