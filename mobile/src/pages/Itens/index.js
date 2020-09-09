import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemEquipado from '../../components/ItemEquipado';
import Item from '../../components/Item';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

import api, { baseURL } from '../../utils/api'
import { getId } from '../../utils/authentication';

export default function Itens(props) {

    const [popUpSemEspaco, setPopUpSemEspaco] = useState(false);
    const [popUpDesequipar, setPopUpDesequipar] = useState(false);
    const [popUpEquipar, setPopUpEquipar] = useState(false);

    const [itens, setItens] = useState([]);
    const [itensEquipados, setItensEquipados] = useState([]);
    const [itensFake, setItensFake] = useState([]);

    const [itemPopUp, setItemPopUp] = useState(0);

    async function loadItens() {
        let id = await getId();
        try {
            const response = await api.get(`/usuario/${id}/itens`);
            setItens(response.data);

        } catch (err) {
            console.log(err);
        }
    }
    async function loadItensEquipados() {
        let id = await getId();
        try {
            const response = await api.get(`/usuario/${id}/itens-equipados`);
            setItensEquipados(response.data);
            setItensFake(Array(4 - response.data.length).fill(''));

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function loadItens() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}/itens`);
                setItens(response.data);

            } catch (err) {
                console.log(err);
            }
        }
        async function loadItensEquipados() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}/itens-equipados`);
                setItensEquipados(response.data);
                setItensFake(Array(4 - response.data.length).fill(''));

            } catch (err) {
                console.log(err);
            }
        }
        loadItens();
        loadItensEquipados();
    }, []);

    async function equipar() {
        if (itensEquipados.length < 4) {
            let id = await getId();
            try {
                const response = await api.post("/item/equipar-item",
                    {
                        "id_usuario": id,
                        "id_item": itemPopUp
                    });
                await loadItens()
                await loadItensEquipados()
                setPopUpEquipar(false)
            } catch (err) {

                console.log(err);
            }
        }
        else {
            setPopUpSemEspaco(true)
        }


    }
    async function desequipar() {
        let id = await getId();
        try {
            const response = await api.post("/item/desequipar-item",
                {
                    "id_usuario": id,
                    "id_item": itemPopUp
                });
            await loadItens()
            await loadItensEquipados()
            setPopUpDesequipar(false)
        } catch (err) {

            console.log(err);
        }
    }

    function openEquipPopUp(id) {
        setItemPopUp(id);
        setPopUpEquipar(true)
    }

    function openDesEquipPopUp(id) {
        setItemPopUp(id);
        setPopUpDesequipar(true)
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />

            <ScrollView style={styles.containerConteudo}>
                <Text style={styles.subtitulo}>Equipados</Text>
                <View style={styles.equipados}>
                    {
                        itensEquipados.map(item => (
                            <ItemEquipado
                                key={item.id}
                                desequipar={() => openDesEquipPopUp(item.id)}
                                imagem={baseURL + item.imagem}
                            />
                        ))
                    }{
                        itensFake.map((item, index) => (
                            <ItemEquipado
                                key={index}
                                desequipar={() => openDesEquipPopUp(item.id)}
                            />
                        ))
                    }
                </View>
                <View style={styles.divisor} />
                <Text style={styles.subtitulo}>Arsenal completo</Text>
                <View>
                    {
                        itens.map(item => (
                            <Item
                                key={item.id}
                                equipar={() => openEquipPopUp(item.id)}
                                nome={item.nome}
                                poder={item.tipo_poder}
                                valorPoder={item.valor_poder}
                                imagem={baseURL + item.imagem}
                            />
                        ))
                    }

                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpEquipar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpEquipar(!popUpEquipar)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Equipar Item</Text>

                        <TouchableOpacity
                            style={styles.botaoModal}
                            onPress={() => equipar()}
                        >
                            <Text style={styles.textStyle}>Equipar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpDesequipar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpDesequipar(!popUpDesequipar)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Desequipar Item</Text>

                        <TouchableOpacity
                            style={styles.botaoModal}
                            onPress={() => desequipar()}
                        >
                            <Text style={styles.textStyle}>Desequipar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpSemEspaco}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpSemEspaco(!popUpSemEspaco)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Sem Espaco</Text>
                        <Text style={styles.texto}>
                            Sem espaço para equipar mais itens!
                            Desequipe um item e tente novamente.
                        </Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}