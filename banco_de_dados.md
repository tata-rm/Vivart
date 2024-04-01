create database vivart;

create table cadastro_oportunizado(
	tipo enum("Oportuniza", "Oportunizado"),
    área enum("dança", "teatro", "musical"),
	nome varchar(255) not null,
    data_nasc date not null,
    cpf varchar(255) primary key not null,
    celular varchar(255) unique not null,
    senha varchar(255) not null,
    email varchar(255) unique not null,
    texto varchar(255),
    curriculo varchar(255),
    certificado varchar(255)
);

select * from cadastro_oportunizado;
drop table cadastro_oportunizado;

create table cadastro_oportuniza(
	tipo enum("Oportuniza", "Oportunizado"),
    área enum("dança", "teatro", "musical"),
	nome varchar(255) not null,
    data_inicio date not null,
    cnpj varchar(255) primary key not null,
    telefone varchar(255) unique not null,
    senha varchar(255) not null,
    email varchar(255) unique not null,
    texto varchar(255),
    certificado varchar(255),
	alvará varchar(255)
);

select * from cadastro_oportuniza;
drop table cadastro_oportuniza;

create table livros(
	nome varchar(255) primary key,
    autor varchar(255),
    data_lançamento date,
    quant_páginas int,
    área enum("dança", "teatro", "musical"),
	tipo enum("artigo", "livro")
);

