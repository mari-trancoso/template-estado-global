import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";
import frutaria from "../frutaria.json";


export default function Router() {
    const [frutas, setFrutas] = useState(frutaria.frutaria);
    const [carrinho, setCarrinho] = useState([])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mercadinho frutas={frutas} setFrutas={setFrutas} carrinho={carrinho} setCarrinho={setCarrinho}/>}
                />
                <Route
                    path="/cart"
                    element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>}
                />
                <Route
                    path="/cadastro"
                    element={<Cadastro frutas={frutas} setFrutas={setFrutas}/>}
                />


            </Routes>
        </BrowserRouter>
    );
}