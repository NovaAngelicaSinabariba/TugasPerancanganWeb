import React, { useState, useEffect } from "react";

const booksData = [
  { title: "Maybe In Another Life", author: "N&S", publisher: "Gugugaga", year: "2010", img: "https://i.imgur.com/CokPM8M.jpeg" },
  { title: "Sampai Kita Tua", author: "Sinabariba", publisher: "Indeks", year: "2011", img: "https://i.imgur.com/R7LRlAT.jpeg" },
  { title: "Guardian Brothers", author: "Arsen & Arya", publisher: "Modula", year: "2012", img: "https://i.imgur.com/Juh21d3.jpeg" },
  { title: "Magazine Fashion", author: "Sally", publisher: "Andi Publisher", year: "2013", img: "https://i.imgur.com/SKNSuOn.jpeg" },
  { title: "Three Best Friends Until The End", author: "3One", publisher: "Deepublish", year: "2014", img: "https://i.imgur.com/J0JUmjS.jpeg" },
  { title: "Loving My Self", author: "Nova", publisher: "Graha Ilmu", year: "2015", img: "https://i.imgur.com/uLDtzLi.jpeg" },
  { title: "The Simplicity of Love", author: "Sabda Ganteng", publisher: "Informatika", year: "2016", img: "https://i.imgur.com/vsNnxPY.jpeg" },
  { title: "Keluarga Cemara", author: "Sinabariba", publisher: "Indeks", year: "2017", img: "https://i.imgur.com/2CWGyof.jpeg" },
  { title: "Enchanged", author: "Melissa Mayer", publisher: "Modula", year: "2018", img: "https://i.imgur.com/EyKSmx7.jpeg" },
  { title: "They Both Die At The Night", author: "Adam Silvera", publisher: "Andi Publisher", year: "2019", img: "https://i.imgur.com/ZF8SvY3.jpeg" },
  { title: "War of Eden", author: "Willy", publisher: "Deepublish", year: "2020", img: "https://i.imgur.com/N9qshQM.jpeg" },
  { title: "If You Could See The Sun", author: "Ann Liang", publisher: "Graha Ilmu", year: "2011", img: "https://i.imgur.com/Q7gOlQn.jpeg" },
  { title: "Twisted Love", author: "Anna Huang", publisher: "Informatika", year: "2012", img: "https://i.imgur.com/aizzYGl.jpeg" },
  { title: "Alice in Neverland", author: "Jeni Conrad", publisher: "Indeks", year: "2013", img: "https://i.imgur.com/jCySPYK.jpeg" },
  { title: "Over The Sirens", author: "Zelda Reese", publisher: "Modula", year: "2014", img: "https://i.imgur.com/erb94hz.jpeg" },
  { title: "Shadow Girl", author: "Liana Liu", publisher: "Andi Publisher", year: "2015", img: "https://i.imgur.com/UNle6Fy.jpeg" },
  { title: "Until My Hearts Gives In", author: "Lily", publisher: "Deepublish", year: "2016", img: "https://i.imgur.com/MlnQaVa.jpeg" },
  { title: "No Body Knows But You", author: "Anica Mrose Rissi", publisher: "Graha Ilmu", year: "2017", img: "https://i.imgur.com/MVZb0YP.jpeg" },
  { title: "Lost in The Never Woods", author: "AIden Thomas", publisher: "Informatika", year: "2018", img: "https://i.imgur.com/b9Z4VPh.jpeg" },
  { title: "Black Hearts", author: "Jenna Wood", publisher: "Indeks", year: "2019", img: "https://i.imgur.com/UT8ZH5U.jpeg" }
];

const popularBookTitles = [
  "Maybe In Another Life",
  "Sampai Kita Tua",
  "Guardian Brothers"
];

const BookApp = () => {
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState("");
  const [filter, setFilter] = useState("title");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    const filtered = booksData.filter(book => {
      const matchYear = year === "" || book.year === year;
      const key = keyword.toLowerCase();

      if (filter === "title") return book.title.toLowerCase().includes(key) && matchYear;
      if (filter === "author") return book.author.toLowerCase().includes(key) && matchYear;
      if (filter === "publisher") return book.publisher.toLowerCase().includes(key) && matchYear;
      if (filter === "titleyear") return book.title.toLowerCase().includes(key) && book.year === year;

      return true;
    });

    setFilteredBooks(filtered);
  }, [keyword, year, filter]);

  const renderBook = (book) => (
    <div className="book" key={`${book.title}-${book.year}`}>
      <img src={book.img} alt={book.title} />
      <strong>{book.title}</strong>
      {book.author}<br />
      {book.publisher} {book.year}
    </div>
  );

  const popularBooks = booksData.filter(book => popularBookTitles.includes(book.title));

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: 'rgb(255, 200, 160)', padding: '20px', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>DAFTAR BUKU</h1>

      <div className="search-bar" style={{ background: '#fff', padding: 20, borderRadius: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', maxWidth: 800, margin: '0 auto 30px' }}>
        <input
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          style={{ padding: 10, margin: 5, border: '1px solid #ccc', borderRadius: 5, width: 'calc(100% - 120px)', maxWidth: 200 }}
        />
        <div className="radio-group" style={{ marginTop: 10 }}>
          <label><input type="radio" name="filter" value="title" checked={filter === 'title'} onChange={e => setFilter(e.target.value)} /> Title</label>
          <label style={{ marginLeft: 15 }}><input type="radio" name="filter" value="author" checked={filter === 'author'} onChange={e => setFilter(e.target.value)} /> Author</label>
          <label style={{ marginLeft: 15 }}><input type="radio" name="filter" value="publisher" checked={filter === 'publisher'} onChange={e => setFilter(e.target.value)} /> Publisher</label>
          <label style={{ marginLeft: 15 }}><input type="radio" name="filter" value="titleyear" checked={filter === 'titleyear'} onChange={e => setFilter(e.target.value)} /> Title & Year</label>
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={e => setYear(e.target.value)}
            style={{ width: 80, marginLeft: 10, padding: 5, borderRadius: 5 }}
          />
        </div>
      </div>

      <h2 style={{ textAlign: 'center', marginTop: 40 }}>📚 Buku Populer</h2>
      <div className="books" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 700, margin: '0 auto 50px' }}>
        {popularBooks.map(renderBook)}
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>📖 Semua Buku</h2>
      <div className="books" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20, padding: '0 20px' }}>
        {filteredBooks.map(renderBook)}
      </div>
    </div>
  );
};

export default BookApp;
