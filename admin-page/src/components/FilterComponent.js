import React, { useState, useEffect } from 'react';
import "./css/FilterComponent.css";
import { Dropdown, Text, Button } from "@nextui-org/react";
import axios from 'axios';

function FilterComponent({ borderColor , options,source,category, onUpdateData}) {
    const style = {
        width: "auto",
        height: "auto",
        borderColor: borderColor
    };

    const optionsData = options
    const sourceData = source
    const categoryData = category

    const SourceList = sourceData.map(item => item.label)
    const CateList = categoryData.map(item => item.label)
    const ProdList = optionsData.map(item => item.label)

    const [data, setData] = React.useState([])

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

    const onclickBtn = (e) => {
        // e.preventDefault()
        const selectProdObject = optionsData.find(item => item.label === selectedValueProd)
        const selectProdId = selectProdObject ? selectProdObject.value : ""
        const selectSrcObject = sourceData.find(item => item.label === selectedValueSource)
        const selectSrcId = selectSrcObject ? selectSrcObject.value : ""
        const selectCateObject = categoryData.find(item => item.label === selectedValueCate)
        const selectCateId = selectCateObject ? selectCateObject.value : ""

        axios
        .get(`http://localhost:3000/productItem?sourceId=${selectSrcId}&categoryId=${selectCateId}&productId=${selectProdId}`)
        .then(response=>{
            console.log(response.data)
            setData(response.data)
            onUpdateData(response.data)
          })
          .catch(err=>alert(err))
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", margin: "25px" }}>
                <div className="square" style={style}>
                    <div style={{ margin: "20px", marginLeft: "50px" }}>
                        <Text>Source</Text>
                        <Dropdown>
                            <Dropdown.Button flat color="#000000" css={{ tt: "capitalize", width: "175px" }}>
                                {selectedValueSource ? selectedValueSource : "None"}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected1}
                                onSelectionChange={setSelected1}
                                css={{minWidth: '300px'}}
                            >
                                <Dropdown.Item key="" css={{width: '450px'}}>None</Dropdown.Item>
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
                                {selectedValueCate ? selectedValueCate : "None"}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected2}
                                onSelectionChange={setSelected2}
                                css={{minWidth: '300px'}}
                            >
                                <Dropdown.Item key="" css={{width: '450px'}}>None</Dropdown.Item>
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
                                {selectedValueProd ? selectedValueProd : "None"}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="#000000"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected3}
                                onSelectionChange={setSelected3}
                                css={{minWidth: '450px'}}
                            >
                                <Dropdown.Item key="" css={{width: '450px'}}>None</Dropdown.Item>
                                {ProdList.map((item) => (
                                    <Dropdown.Item key={item} css={{width: '450px'}}>{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{ alignItems: "center", justifyContent: "center" }}>
                        <div style={{ margin: "30px" }}>
                            <Button auto color="#000000" rounded flat onClick={onclickBtn}>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterComponent;