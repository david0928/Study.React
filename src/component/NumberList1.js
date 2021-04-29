function ListItem(props) {
    // 正確！你不需要在這裡指出 key：
    return <li>{props.value}</li>;
}

function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 正確！Key 應該在 array 內被指定。
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList1;