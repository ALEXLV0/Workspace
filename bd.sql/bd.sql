CREATE TABLE trabajadores (
    id_trabajador INT PRIMARY KEY AUTO_INCREMENT,
    nombre_t VARCHAR(255) NOT NULL,
    id_t INT NOT NULL,
    ocupacion_t VARCHAR(255),
    -- Métodos representados como comentarios o lógica de aplicación
    -- + Guardar()
    -- + Mostrar a admins()
);


CREATE TABLE administradores (
    id_administrador INT PRIMARY KEY AUTO_INCREMENT,
    nombre_a VARCHAR(255) NOT NULL,
    id_a INT NOT NULL,
    encargo_a VARCHAR(255),
    -- + Guardar()
);


CREATE TABLE estudiantes (
    id_estudiante INT PRIMARY KEY AUTO_INCREMENT,
    nombre_e VARCHAR(255) NOT NULL,
    id_e INT NOT NULL,
    curso_e VARCHAR(100),
    -- + Guardar()
    -- + Mostrar a admins()
);


CREATE TABLE actividades (
    id_actividad INT PRIMARY KEY AUTO_INCREMENT,
    fecha_a DATE NOT NULL,
    actividad_a VARCHAR(255) NOT NULL,
    alarma_a ENUM('SI', 'NO') DEFAULT 'NO',
    -- Llaves foráneas para conectar con quien crea o participa
    id_administrador_fk INT,
    id_trabajador_fk INT,
    id_estudiante_fk INT,
    FOREIGN KEY (id_administrador_fk) REFERENCES administradores(id_administrador),
    FOREIGN KEY (id_trabajador_fk) REFERENCES trabajadores(id_trabajador),
    FOREIGN KEY (id_estudiante_fk) REFERENCES estudiantes(id_estudiante)
    -- + Guardar()
    -- + Mostrar a usuarios()
);



     
