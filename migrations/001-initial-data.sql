-- Up
CREATE TABLE microphone (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    price INTEGER,
    imageurl TEXT
);

INSERT INTO Microphone (brand, model, price, imageurl) values('Blue', 'Amber', 99.99, '/microphones/blue-amber.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Blue', 'Bluebird SL', 299.99, '/microphones/bluebird.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Blue', 'Kiwi', 2000, '/microphones/blue-kiwi.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Blue', 'Spark', 399, '/microphones/blue-spark.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Blue', 'Yeti', 130, '/microphones/blue-yeti.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'NT-USB Mini', 100.00, '/microphones/nt-usb-mini.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'Broadcaster', 350.00, '/microphones/rode-broadcaster.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'Podcaster', 145, '/microphones/podcaster.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'Nt1', 230, '/microphones/rode-nt1.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'Nt1a', 220, '/microphones/rode-nt1a.png');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'NT-USB', 135, '/microphones/rode-ntusb.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'Podmic', 10599, '/microphones/rode-podmic.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Rode', 'Procaster', 130, '/microphones/rode-procaster.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Samson', 'USB', 17999, '/microphones/samson-usb.jpeg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Shure', 'Beta 58a', 139, '/microphones/shure-beta-58a.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Shure', 'Beta 87a', 280, '/microphones/shure-beta-87a.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Shure', 'sm7b', 399, '/microphones/shure-sm7b.jpg');
INSERT INTO Microphone (brand, model, price, imageurl) values('Shure', 'Super-55', 200, '/microphones/shure-super55.jpg');

-- Down
DROP TABLE Microphone;

