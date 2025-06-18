
export const addStudent = async (student) => {
    try{
        const response = await fetch("http://localhost:8080/student/addStudent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        })
        if (!response.ok) {
            throw new Error("Failed to add student");
        }
        return await response.json();

    }catch (error) {
        console.error("Error adding student:", error);
        throw error;
    }
}

export const getStudents = async () => {
    try {
        const response = await fetch("http://localhost:8080/student/getAllStudents");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
}

export const updateStudent = async (id, student) => {
    try {
        const response = await fetch(`http://localhost:8080/student/updateStudent?id=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const text = await response.text(); // Esto debería mostrar "Student updated successfully"
        return text;
    } catch (error) {
        console.error("Error updating student:", error);
        throw error;
    }
}

export const deleteStudent = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/student/deleteStudent?id=${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const text = await response.text(); // Esto debería mostrar "Student deleted successfully"
        return text;
    } catch (error) {
        console.error("Error deleting student:", error);
        throw error;
    }
}