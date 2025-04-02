CREATE TABLE equipment (
    id INT PRIMARY KEY,
    type VARCHAR(40),
    serial_number INT,
    model VARCHAR(40),
    developer_id INT,
    FOREIGN KEY (developer_id) REFERENCES developers(id)
);

CREATE TABLE developers (
    id INT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    hourly_rate INT,
    type_of_contract VARCHAR(20),
    started_work DATE,
    stopped_work DATE
);


/**
You are working for a Software house as a Database Management Specialist.

You've got assigned a task to check the additional equipment in the database for employees currently working at the company. All the developers have at least two pieces of equipment - one pair of headphones and a laptop.

Create a list containing the developer's id, first_name and last_name
of all the developers who have more equipment at their disposal than the minimum established above 
and are still working for the Software House.
*//

SELECT 
    d.id, 
    d.first_name, 
    d.last_name
FROM 
    developers d
JOIN 
    (SELECT 
        developer_id, 
        COUNT(*) as equipment_count
     FROM 
        equipment
     GROUP BY 
        developer_id
     HAVING 
        COUNT(*) > 2) e ON d.id = e.developer_id
WHERE 
    d.stopped_work IS NULL
ORDER BY 
    d.id;