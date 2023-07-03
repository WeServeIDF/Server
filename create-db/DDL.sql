CREATE TABLE Users (
  id VARCHAR(9) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(30) NOT NULL,
  phone VARCHAR(11) NOT NULL,
  unit VARCHAR(30) NOT NULL
);

CREATE TABLE Stations (
  id INT PRIMARY KEY,
  base VARCHAR(50) NOT NULL,
  building VARCHAR(50) NOT NULL,
  network VARCHAR(30) NOT NULL,
  office VARCHAR(50) NOT NULL,
  description VARCHAR(500) NOT NULL,
  lat FLOAT NOT NULL,
  long FLOAT NOT NULL,
  isPrimary BOOLEAN NOT NULL,
  ownerId VARCHAR(9),
  FOREIGN KEY (ownerId) REFERENCES Users(id),
  CONSTRAINT unique_primary_station_per_owner CHECK (
    NOT (isPrimary = TRUE AND EXISTS (
      SELECT 1 FROM Stations
      WHERE ownerId = Stations.ownerId
      AND isPrimary = TRUE
      AND id <> Stations.id
    ))
  )
);

CREATE TABLE StationUseRequests (
  id INT PRIMARY KEY,
  date DATE NOT NULL,
  requestStatus BOOLEAN NOT NULL DEFAULT FALSE,
  clientId VARCHAR(9),
  stationId INT,
  FOREIGN KEY (clientId) REFERENCES Users(id),
  FOREIGN KEY (stationId) REFERENCES Stations(id),
  CONSTRAINT different_client_owner CHECK (clientId <> (
    SELECT ownerId FROM Stations WHERE id = stationId
  ))
);