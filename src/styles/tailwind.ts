
export default function tailwind() {

    const H1 = "font-[300] text-[3.2rem] leading-[100%] tracking-[-0.5px] text-[#FFFFFF]"
    const H2 = "font-[400] text-[2.4rem] leading-[100%] text-[#FFFFFF]"
    const H4 = "font-[400] text-[1.8rem] leading-[100%] text-[#FFFFFF]"
    const P1 = "font-[400] text-[1.5rem] leading-[100%] text-[#FFFFFF]"
    const P2 = "font-[400] text-[1.3rem] leading-[100%] text-[#FFFFFF]"
    const inputStyle = `w-[336px] ${P1} border-b-[1px] outline-none border-solid border-[#5A698F] focus:border-[#FFFFFF] p-[0_12px_16px_12px] caret-[#FC4747]`
    const errorStyle = `${P2} text-[#FC4747]! text-right relative top-[16px] pr-[20px]`


    return { H1, H2, H4, P1, P2, inputStyle, errorStyle }
}
