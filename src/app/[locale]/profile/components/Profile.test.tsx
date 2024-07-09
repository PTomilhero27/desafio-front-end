import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import UserProfile from "./profile";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("UserProfile Component", () => {
  beforeEach(() => {
    const router = {
      back: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(router);
  });

  it("renders the user profile with correct data", () => {
    render(<UserProfile />);

    expect(screen.getByText(/Pedro Tomilhero/i)).toBeInTheDocument();
    expect(screen.getByText(/Desenvolvedor FullStack/i)).toBeInTheDocument();

    expect(screen.getByText(/ptomilhero27@gmail.com/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ptomilhero27@gmail.com/i })
    ).toHaveAttribute("href", "mailto:ptomilhero27@gmail.com");

    expect(screen.getByText(/5511941780315/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /5511941780315/i })
    ).toHaveAttribute("href", "https://wa.me/5511941780315");

    expect(
      screen.getByText(/Sou um programador altamente motivado/i)
    ).toBeInTheDocument();

    expect(screen.getByAltText(/Pedro Tomilhero/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/pedro-tomilhero-2696981b5/"
    );
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/PTomilhero27"
    );
  });

  it("calls router.back when the back button is clicked", () => {
    const { getByRole } = render(<UserProfile />);
    const backButton = screen.getByRole("button", { name: /Voltar/i });

    fireEvent.click(backButton);

    const router = useRouter();
    expect(router.back).toHaveBeenCalled();
  });
});
