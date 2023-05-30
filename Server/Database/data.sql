BEGIN;

DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  progress INT,
  date VARCHAR(300)
);
INSERT INTO todos ( title, progress, date)
VALUES
  ( 'Task 1', 0, '2023-05-2');

COMMIT;