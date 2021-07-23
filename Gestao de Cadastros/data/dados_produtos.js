let listaProdutos = [
    // tecnologia
    {id: 0, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook Acer Nitro Gamer AN515-55-59MT Intel Core I5 16GB 512GB SSD 15.6' Windows 10", fabricante: "accer", qtde:2, imagem: '/img/tecnologia/noteboks/notebook_acer.jpg', preco: "R$ 3.850,00"},
    {id: 1, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook HP 256 G8 Intel Core i3 8GB 256GB SSD - 15,6&quot; LCD Windows 10", fabricante: "hp", qtde:32, imagem: '/img/tecnologia/noteboks/notebook_hp_.jpg', preco: "R$ 3.050,00"},
    {id: 2, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Xiaomi Redmi Note 10 4GB+64GB Versão global Onyx Gray", fabricante: "xiaomi", qtde:24, imagem: '/img/tecnologia/celulares/xaomi_note_10.jpg', preco: "R$ 1.250,00"},
    {id: 3, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Celular Smartphone K22+ 64GB 6,2 LG - Vermelho", fabricante: "lg", qtde:18, imagem: '/img/tecnologia/celulares/celular-smartphone-k22-64gb-6-2-lg_397369.jpg', preco: "R$ 2.150,00"},
    {id: 4, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Relógio Amazfit GTS A1914 - Preto", fabricante: "amazfit", qtde:45, imagem: '/img/tecnologia/smart_whatches/smart_whatch_amazfit_bip_u+pro.jpg', preco: "R$ 420,00"},
    {id: 5, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Galaxy Watch Active2 Preto", fabricante: "sansumg", qtde:102, imagem: '../img/tecnologia/smart_whatches/5187V2FMXML._AC_SL1000_.jpg', preco: "R$ 235,99"},
    {id: 6, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Apple iPad 8ª Geração 10.2, Wi-Fi, 128GB Silver - A2270", fabricante: "apple", qtde:14, imagem: '/img/tecnologia/tablets/apple_ipad.jpg', preco: "R$ 3.330,00"},
    {id: 7, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Tablet Samsung Galaxy A7 64GB Wi-Fi 4G Tela 10.4” Android Octa-Core 2.0GHz - Grafite", fabricante: "samsung", qtde:16, imagem: '/img/tecnologia/tablets/tablet_samsung.jpg', preco: "R$ 1.296,28"},
    // ccasa
    {id: 8, categoria: "Casa", subcategoria: "Cama", descricao: "Cama Casal Madri Espresso Móveis Canion Hf", fabricante: "Espresso Móveis", qtde:36, imagem: '/img/casa/camas/cama_ecoflex.jpg', preco: "R$ 555,44"},
    {id: 9, categoria: "Casa", subcategoria: "Cama", descricao: "Colchão Cama Box Magnético Casal Massageador Cabeceira", fabricante: "Eco Dream", qtde:14, imagem: '/img/casa/camas/cama.jpg', preco: "R$ 2.196,00"},
    {id: 10, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofá Berlim Retrátil Reclinável Chaise e Canto - 5 Lugares 2.70 M- 1 Tok Estofados", fabricante: "Tok Estofados", qtde:2, imagem: '/img/casa/sofas/sofa_berlim.jpg', preco: "R$ 2.789,10"},
    {id: 11, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofa 4 Lugares Retratil e Reclinavel com Bau Linoforte Artemis", fabricante: "Tok Estofados", qtde:42, imagem: '/img/casa/sofas/sofa_linoforte.jpg', preco: "R$ 1.679,00"},
    {id: 12, categoria: "Casa", subcategoria: "Mesa", descricao: "Mesa de Jantar 6 Cadeiras Retangular Rufato - Alvorada Londrina", fabricante: "Rufato", qtde:145, imagem: '/img/casa/mesas/mesa_rufato.jpg', preco: "R$ 1.899,99"},
    {id: 13, categoria: "Casa", subcategoria: "Mesa", descricao: "Conjunto Laguna de madeira mesa 120X70 com 4 cadeiras imbuia estofado marrom", fabricante: "Imbuia", qtde:140, imagem: '/img/casa/mesas/mesa_imbuia.jpg', preco: "R$ 849,97"},
    // ferramentas
    {id: 14, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "DEWALT Mala de Ferramentas Multitak com 37 Compartimentos DWST82928-LA", fabricante: "dewalt", qtde:2, imagem: '/img/ferramentas/mala_de_ferrmanetas_multipak.jpg', preco: "R$ 459,48"},
    {id: 15, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "Organizador de Ferramentas Dewalt TSTAK Nº4 DWST17804 16.5 com Duas Gavetas", fabricante: "tstak", qtde:55, imagem: '/img/ferramentas/organizador_tstak.jpg', preco: "R$ 392,07"},
    // moda
    {id: 15, categoria: "Moda", subcategoria: "Vestidos", descricao: "Vestido Godê Rodado Midi Moda Evangélica", fabricante: "Puro Glamour", qtde:59, imagem: '/img/moda/vestidos/vestido_evangelica.jpg', preco: "R$ 99,00"},
    {id: 16, categoria: "Moda", subcategoria: "Sapatos", descricao: "Sapato Feminino Oxford Branco em Couro Salto Tratorado 19000", fabricante: "Oxford", qtde:67, imagem: '/img/moda/sapatos/sapato_oxford.jpg', preco: "R$ 159,99"},
    // produtos de beleza
    {id: 17, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Máscara Capilar Match SOS Reconstrução, 250g", fabricante: "Match", qtde:71, imagem: '/img/produtos_beleza/mascara_capilar.png', preco: "R$ 57,90"},
    {id: 18, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Yenzah Cronograma Capilar 3 Em 1 - Máscara de Tratamento", fabricante: "Yenzah", qtde:84, imagem: '/img/produtos_beleza/mascara_capilar_1.jpg', preco: "R$ 19,80"},
    {id: 19, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Máscara Capilar Eico Tratamento Mandioca 500g", fabricante: "Ikesaki", qtde:80, imagem: '/img/produtos_beleza/mascara_capilar_2.png', preco: "R$ 19,90"},
    {id: 20, categoria: "Produtos de Beleza", subcategoria: "Kit Maquiagem", descricao: "Kit 10 Pinceis Kabuki Para Maquiagem Preto Com Dourado", fabricante: "On Line", qtde:90, imagem: '/img/produtos_beleza/kit_maquiagem.jpg', preco: "R$ 31,20"},
    {id: 21, categoria: "Produtos de Beleza", subcategoria: "Kit Maquiagem", descricao: "Glitter p/ pele em pó Color Make c/ 10 cores Yur BT 1 KT", fabricante: "Yur", qtde:10, imagem: '/img/produtos_beleza/kit_maquiagem_1.jpg', preco: "R$ 18,90"},
    // brinquedos
    {id: 22, categoria: "Brinquedos", subcategoria: "Pula Pula", descricao: "Cama Elástica 3,05m - Completa, Colorida e Importada", fabricante: "Lacuca brinquedos", qtde:14, imagem: '/img/brinquedos/pula_pula/pula_pula.jpg', preco: "R$ 1.599,00"},
    {id: 23, categoria: "Brinquedos", subcategoria: "Pula Pula", descricao: "Pula Pula Inflável Infantil Com Cesta De Basquete Intex", fabricante: "Intex", qtde:17, imagem: '/img/brinquedos/pula_pula/pula_pula_1.jpg', preco: "R$ 649,99"},
    {id: 24, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina de Bolinhas Premium - Medidas 1,10m X 1,10m - Acompanha 500 Bolinhas TOP Coloridas", fabricante: "Lacuca Brinquedos", qtde:12, imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha.jpg', preco: "R$ 789,00"},
    {id: 25, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina de Bolinhas 3m com 5.000 Bolinhas 1,90 X 3,00(L) X 3,00 (A)", fabricante: "Lacuca Brinquedos", qtde:100, imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha_1.jpg', preco: "R$ 3.499,00"},
    {id: 26, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina De Bolinha + 200 Bolinhas + Piscina De Água 70 L", fabricante: "Company kids", qtde:5, imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha_2.jpg', preco: "R$ 399,49"},
]

console.log(localStorage.setItem("produtos",JSON.stringify(listaProdutos)))
