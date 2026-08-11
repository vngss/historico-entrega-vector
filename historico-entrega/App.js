import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

// Importação dos seus componentes conforme a estrutura dentro da pasta src
import HistoricoVendedor from './src/HistoricoVendedor';
import HistoricoEntregador from './src/HistoricoEntregador';

export default function App() {
  const [tipoUsuario, setTipoUsuario] = useState('vendedor'); // 'vendedor' ou 'entregador'

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      
      {/* Botões para alternar entre as telas */}
      <View style={styles.menuNavegacao}>
        <TouchableOpacity
          style={[styles.botaoTab, tipoUsuario === 'vendedor' && styles.botaoAtivo]}
          onPress={() => setTipoUsuario('vendedor')}
        >
          <Text style={[styles.textoBotao, tipoUsuario === 'vendedor' && styles.textoAtivo]}>
            Vendedor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoTab, tipoUsuario === 'entregador' && styles.botaoAtivo]}
          onPress={() => setTipoUsuario('entregador')}
        >
          <Text style={[styles.textoBotao, tipoUsuario === 'entregador' && styles.textoAtivo]}>
            Entregador
          </Text>
        </TouchableOpacity>
      </View>

      {/* Renderização Condicional do Componente */}
      <View style={styles.conteudo}>
        {tipoUsuario === 'vendedor' ? (
          <HistoricoVendedor />
        ) : (
          <HistoricoEntregador />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  menuNavegacao: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  botaoTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  botaoAtivo: {
    backgroundColor: '#2563eb',
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  textoAtivo: {
    color: '#ffffff',
  },
  conteudo: {
    flex: 1,
  },
});