import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Login from "./Login";
import { useLoginForm } from "../utils/useLoginForm";
import "@testing-library/jest-dom";

jest.mock("../utils/useLoginForm");

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Login Component", () => {
  beforeEach(() => {
    const mockUseLoginForm = useLoginForm as jest.MockedFunction<
      typeof useLoginForm
    >;

    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {},
      onSubmit: jest.fn(),
      isSubmitting: false,
    });
  });

  it("renders the login form", () => {
    render(<Login />);

    expect(screen.getByLabelText(/Usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  it("shows error messages on invalid submission", async () => {
    const mockUseLoginForm = useLoginForm as jest.MockedFunction<
      typeof useLoginForm
    >;

    mockUseLoginForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {
        username: { type: "required", message: "Usuário é obrigatório" },
        password: {
          type: "minLength",
          message: "Senha deve ter pelo menos 3 caracteres",
        },
      },
      onSubmit: jest.fn(),
      isSubmitting: false,
    });

    render(<Login />);

    fireEvent.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(
      await screen.findByText("Usuário é obrigatório")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Senha deve ter pelo menos 3 caracteres")
    ).toBeInTheDocument();
  });
});
