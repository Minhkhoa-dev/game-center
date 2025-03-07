import styled, { keyframes } from "styled-components";
import game1 from "../assets/game-hot-thumb.jpg";
import game2 from "../assets/2.jpg";
import game3 from "../assets/3.jpg";

const games = [
    {
        id: 1,
        title: "Cyber World",
        description: "Trải nghiệm thế giới tương lai đầy bí ẩn và nguy hiểm.",
        image: game1,
    },
    {
        id: 2,
        title: "Fantasy Adventure",
        description: "Cuộc phiêu lưu kỳ thú trong thế giới phép thuật.",
        image: game2,
    },
    {
        id: 3,
        title: "Racing Fever",
        description: "Đua xe tốc độ cao với đồ họa ấn tượng.",
        image: game3,
    },
    {
        id: 4,
        title: "Racing Fever",
        description: "Đua xe tốc độ cao với đồ họa ấn tượng.",
        image: game3,
    },
    {
        id: 5,
        title: "Racing Fever",
        description: "Đua xe tốc độ cao với đồ họa ấn tượng.",
        image: game3,
    },
    {
        id: 6,
        title: "Racing Fever",
        description: "Đua xe tốc độ cao với đồ họa ấn tượng.",
        image: game3,
    },
    {
        id: 7,
        title: "Racing Fever",
        description: "Đua xe tốc độ cao với đồ họa ấn tượng.",
        image: game3,
    },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #121212;
    color: white;
    min-height: 100vh;
    padding: 50px 20px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 30px;
    animation: ${fadeIn} 1s ease-out;
`;

const GameList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1000px;
`;

const GameCard = styled.div`
    background: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: ${fadeIn} 1s ease-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
    }
`;

const GameImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const GameContent = styled.div`
    padding: 15px;
    text-align: center;
`;

const GameTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const GameDescription = styled.p`
    font-size: 1rem;
    opacity: 0.8;
`;

const Button = styled.a`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background: #ff4757;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 5px;
    transition: background 0.3s ease;

    &:hover {
        background: #e84118;
    }
`;

const GamePromo = () => {
    return (
        <Container>
            <Title>Khám phá những tựa game hot nhất!</Title>
            <GameList>
                {games.map((game) => (
                    <GameCard key={game.id}>
                        <GameImage src={game.image} alt={game.title} />
                        <GameContent>
                            <GameTitle>{game.title}</GameTitle>
                            <GameDescription>{game.description}</GameDescription>
                            <Button href='#'>Chơi ngay</Button>
                        </GameContent>
                    </GameCard>
                ))}
            </GameList>
        </Container>
    );
};

export default GamePromo;
