import React, { useState, ChangeEvent } from "react";
import './auth-component.css';

const AuthComponent: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            if (typeof reader.result === "string") {
                setImagePreview(reader.result);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <form action="">
                
                <label htmlFor="fname">First Name:</label><br />
                <input type="text" id='fname' name="fname" /><br />
                <label htmlFor="lname">Last Name:</label><br />
                <input type="text" id='lname' name='lname' /><br />
                <label htmlFor="age">Age:</label><br />
                <input type="text" id="age" name="age" /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" /><br />
                <label htmlFor="bio">Bio:</label><br />
                <textarea id="bio" name="bio" /><br />
                <label htmlFor="gender">Gender:</label><br />
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br />
                <label htmlFor="avatar">Avatar:</label><br />
                <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleFileChange} /><br />
                {imagePreview && (
                    <img src={imagePreview} alt="Avatar Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                )}
                <br />
                <label htmlFor="agree">Agree to terms:</label>
                <input type="checkbox" id="agree" name="agree" />
                <br />
                <label htmlFor="subscribe">Subscribe to newsletter:</label>
                <input type="checkbox" id="subscribe" name="subscribe" />
                <br />
                <label>Choose your role:</label>
                <br />
                <input type="radio" id="student" name="role" value="student" />
                <label htmlFor="student">Student</label>
                <br />
                <input type="radio" id="teacher" name="role" value="teacher" />
                <label htmlFor="teacher">Teacher</label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AuthComponent;
