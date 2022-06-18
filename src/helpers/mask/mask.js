export const handleChange = (inputCard,data) => {
    const cardValue = data !== 2 || !data ?  inputCard.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/) : inputCard.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/)
    inputCard.target.value = !cardValue[2] ? cardValue[1]: `${cardValue[1]} ${cardValue[2]}${`${cardValue[3] ? ` ${cardValue[3]}` : ''}`} ${`${cardValue[4] ? `${cardValue[4]}` : ''}`}`;
};