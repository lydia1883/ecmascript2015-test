import React, { Component } from 'react';

export const element = (
    <h1 className="greeting">
        Hello World
    </h1>
);
export const tick = () => { 
    return  (
        <div>
            <h1>Hello World</h1>
            <h2>It is { new Date().toLocaleDateString() }.</h2>
        </div>
    )
}