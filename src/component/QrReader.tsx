"use client"

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const MyQrReader = () => {
    const [data, setData] = useState<any>(null);

    console.log(data)
    return (
        <div className="w-[200px] h-[200px]" style={{width: 400, height: 400}} >
            <QrReader
                constraints={{ facingMode: { exact: "environment" } }}
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                scanDelay={500}
            />
        </div>
    );
};

export default MyQrReader;