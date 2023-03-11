import React from "react";
import "./css/FilterComponent.css";
import { Dropdown, Text, Button } from "@nextui-org/react";

function FilterComponent({ borderColor }) {
    const style = {
        width: 800,
        height: 100,
        borderColor: borderColor
    };

    const SourceList = ["ครุภัณฑ์สำนักงาน", "ครุภัณฑ์ประจำห้องปฏิบัติการ"]
    const CateList = ["ครุภัณฑ์เคลื่อนย้ายได้", "ประจำโต๊ะ", "Instrument"]
    const ProdList = ["Multimeter", "Oscilloscope", "Function generator", "etc..."]

    const [selected1, setSelected1] = React.useState(new Set(["text"]));
    const [selected2, setSelected2] = React.useState(new Set(["text"]));
    const [selected3, setSelected3] = React.useState(new Set(["text"]));
    const selectedValueSource = React.useMemo(
        () => Array.from(selected1).join(", ").replaceAll("_", " "),
        [selected1]
    );
    const selectedValueCate = React.useMemo(
        () => Array.from(selected2).join(", ").replaceAll("_", " "),
        [selected2]
    );
    const selectedValueProd = React.useMemo(
        () => Array.from(selected3).join(", ").replaceAll("_", " "),
        [selected3]
    );
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", margin: "25px" }}>
                <div className="square" style={style}>
                    <div style={{ margin: "20px", marginLeft: "50px" }}>
                        <Text>Source</Text>
                        <Dropdown>
                            <Dropdown.Button flat color="#000000" css={{ tt: "capitalize", width: "175px" }}>
                                {selectedValueSource}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected1}
                                onSelectionChange={setSelected1}
                            >
                                {SourceList.slice(0).map((data, index) => (
                                    <Dropdown.Item key={data}>{data}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{ margin: "20px" }}>
                        <Text>Categories</Text>
                        <Dropdown>
                            <Dropdown.Button flat color="#000000" css={{ tt: "capitalize", width: "175px" }}>
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
                                {CateList.slice(0).map((data, index) => (
                                    <Dropdown.Item key={data}>{data}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{ margin: "20px" }}>
                        <Text>Product</Text>
                        <Dropdown>
                            <Dropdown.Button flat color="#000000" css={{ tt: "capitalize", width: "175px" }}>
                                {selectedValueProd}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected3}
                                onSelectionChange={setSelected3}
                            >
                                {ProdList.slice(0).map((data, index) => (
                                    <Dropdown.Item key={data}>{data}</Dropdown.Item>
                                ))}
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