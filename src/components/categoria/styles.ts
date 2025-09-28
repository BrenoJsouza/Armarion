import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    categoria: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
        backgroundColor: '#ffffff7c',
        borderRadius: 16,
        padding: 16,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ButtonM: {
        width: 52,
        height: 52,
        backgroundColor: '#48cff8ff',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontSize: 30,
        color: '#fff',
    },
    itemBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        backgroundColor: '#ffe96b79',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    input: {
        width: 60,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        textAlign: 'center',
    },
    ButtonR: {
        backgroundColor: '#ff4d4d',
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
    },
    nomeInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 8,
    },
    quantidadeBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtdButton: {
        backgroundColor: '#48cff8',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    qtdText: {
        fontSize: 18,
        color: '#fff',
    },
    qtdValor: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInput: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalCancel: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 8,
    },
    modalConfirm: {
        backgroundColor: '#48cff8',
        padding: 10,
        borderRadius: 8,
    },
    modalText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemNome: {
        flex: 1,
        fontSize: 16,
    },
});