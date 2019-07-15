import styled from 'styled-components'

export const AppWrap = styled.div`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
`

export const GameWrap = styled.div`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
`

export const Auctioneer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    text-align: center;

    h4 {
        font-size: 18px;
        margin-bottom: 0;
    }

    img {
        align-self: center;
    }
`

export const UserChat = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    text-align: center;
`

export const InnerUserChat = styled.div`
    margin-top: 20px;
    padding: 10px;
`

export const Buttons = styled.button`
    border: 1px solid #145EE1;
    padding: 10px 15px;
    color: #fff;
    background-color: #176AFF;
    margin-right: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px grey;
`

export const Inputs = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 30px;
    border-radius: 5px;
    border: 1.2px solid lightgrey;
    box-shadow: 2px 2px 2px grey;

    input {
        padding-left: 10px;
        width: 70%;
        border: none;
    }

    button {
        height: 30px;
        margin: 0;
        padding: 0;
        width: 30%;
        border: none;
        color: #fff;
        background-color: #176AFF;
        justify-self: flex-end;
        border-radius: 0 5px 5px 0;
    }

    input::active {
        outline: none;
    }
`

export const BidderAreaWrap = styled.div`
    margin: 20px auto;
    width: auto;
    max-width: 90%;
    height: auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    text-align: center;
`
export const PlayerCardWrap = styled.div`
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const PlayerCard = styled.div`
    width: 90%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 2px 2px 3px grey;
    margin: 10px;

    img {
        width: 50px;
    }
`

export const LoadingWrap = styled.img`
    max-width: 25px;
    animation: load-spin infinite 1s linear;

        @keyframes load-spin {
            from {
            transform: rotate(360deg);
            }
            to {
            transform: rotate(0deg);
            }
        }
`

export const TimerWrap = styled.div`
    width: auto;
    max-width: 50%;
    height: auto;
    background-color: #000;
    color: white;
    text-align: center;
    border-radius: 5px;
    box-shadow: 2px 2px 3px grey;
    margin: 0 auto;
    padding-top: 0;

    h3 {
        padding: 2px 0;
    }
`

export const BidAmount = styled.div`
    font-weight: bold;
    font-size: 18px;
    font-family: 'Roboto', sans serif;
`

export const HighestDisplay = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #3E3E3E;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
`

export const HighBidWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    padding: 5px 10px;
    margin: 10px 0;
    color: white;
    h3 {
        font-size: 16px;
    }
`

export const EndOfRoundWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
`

export const WinLoseWrap = styled.div`
    margin: 0 auto;
    align-content: center;
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    text-align: center;
    margin-top: 100px;

    img {
        margin-bottom: 20px;
    }

    button {
        font-size: 16px;
        width: 40%;
        height: 30px;
        border: none;
        color: #fff;
        background-color: #176AFF;
        justify-self: flex-end;
        border-radius: 5px;
        margin-bottom: 20px;
    }
`