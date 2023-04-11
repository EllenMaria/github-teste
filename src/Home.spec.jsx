// import "@testing-library/jest-dom"
// import {render, fireEvent} from '@testing-library/react'
// import Home from "./pages/Home"
// import { BrowserRouter } from "react-router-dom";

// const navigate = vi.fn();
//         vi.mock('react-router-dom', async () => {
//         const actual = await vi.importActual('react-router-dom')
//         return {
//             ...actual,
//             useNavigate: () => navigate,
//         }
//     });

// describe('Home', () => {
//     it('should navigate to the correct path when the form is submitted', () => {
//     const { getByRole } = render(
//         <BrowserRouter>
//             <Home />
//         </BrowserRouter>
//     );

//     const searchInput = getByRole('textbox');
//     const submitButton = getByRole('button');

//     fireEvent.change(searchInput, { target: { value: 'username' } });
//     fireEvent.click(submitButton);
//     expect(navigate).toHaveBeenCalledWith('perfil/username');
//   });
// })

// // "navigates back to home page when 'Voltar' button is clicked"

// // "renders message when user doesn't have public repositories"

// // "renders profile and repositories when data is fetched"

// // "renders error page when there's an error fetching data"