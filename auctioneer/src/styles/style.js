import styled from 'styled-components'

export const AppWrap = styled.div`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
`

export const GameWrap = styled.div`
    width: 90%;
    height: 90vh;
    height: calc(var(--vh, 1vh) * 90);
    margin: 0 auto;
`

export const Auctioneer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 20px;
    width: 40%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
`

export const UserChat = styled.div`
    width: 25%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 3px 3px 3px grey;
    text-align: center;
`

export const InnerUserChat = styled.div`
    margin-top: 20px;
    padding: 10px;

    .loading {
        animation: gear-spin infinite 1s linear;
    }

    @keyframes gear-spin {
        from {
        transform: rotate(360deg);
        }
        to {
        transform: rotate(0deg);
        }
    }

    @keyframes big-gear-spin {
        from {
        transform: rotate(180deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
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
    width: 80%;
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