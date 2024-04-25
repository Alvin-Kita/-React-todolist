import styled from "styled-components";
import Button from "./Button.js";

const Div = styled.div`
    background-color: rgba(0, 0, 0, 0.03);
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-radius: 10px;
`;



const Task = (props) => {
    const { label, remove, index } = { ...props };

    return (
        <Div>
            <h4>{label}</h4>
            <div>
                <Button>
                    <img src="/check-list.png" />
                </Button>
                <Button onClick={() => remove(index)}>
                    <img src="/delete-forever.png" />
                </Button>
            </div>
        </Div>
    );
};

export default Task;