import React from "react";
import "./css/FilterComponent.css";
import { Dropdown, Text, Button } from "@nextui-org/react";

function FilterComponent({ borderColor }) {
    const style = {
        width: 800,
        height: 100,
        borderColor: borderColor
    };
    const [selected1, setSelected1] = React.useState(new Set(["text"]));
    const [selected2, setSelected2] = React.useState(new Set(["text"]));
    const selectedValueType = React.useMemo(
        () => Array.from(selected1).join(", ").replaceAll("_", " "),
        [selected1]
    );
    const selectedValueCate = React.useMemo(
        () => Array.from(selected2).join(", ").replaceAll("_", " "),
        [selected2]
    );
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", margin: "25px" }}>
                <div className="square" style={style}>
                    <div style={{ margin: "20px", marginLeft: "50px" }}>
                        <Text>Type</Text>
                        <Dropdown>
                            <Dropdown.Button flat color="#000000" css={{ tt: "capitalize", width: "200px" }}>
                                {selectedValueType}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected1}
                                onSelectionChange={setSelected1}
                            >
                                <Dropdown.Item key="text">Text</Dropdown.Item>
                                <Dropdown.Item key="number">Number</Dropdown.Item>
                                <Dropdown.Item key="date">Date</Dropdown.Item>
                                <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                                <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{ margin: "20px" }}>
                        <Text>Categories</Text>
                        <Dropdown>
                            <Dropdown.Button flat color="#000000" css={{ tt: "capitalize", width: "200px" }}>
                                {selectedValueCate}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected2}
                                onSelectionChange={setSelected2}
                            >
                                <Dropdown.Item key="text">Text</Dropdown.Item>
                                <Dropdown.Item key="number">Number</Dropdown.Item>
                                <Dropdown.Item key="date">Date</Dropdown.Item>
                                <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                                <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{ alignItems: "center", justifyContent: "center", height: "100vh" }}>
                        <div style={{ margin: "30px" }}>
                            <Button auto color="#000000" rounded flat>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterComponent;