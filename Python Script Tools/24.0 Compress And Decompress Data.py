from compress import Compressor 
# Importar la libreria 
c = Compressor()
c.use_zlib()

# Formatos: use_bz2, use_lzma, use_lz4, use_snappy 
c.compress(binary_data, zlib_level=9)

# Descomprimir usando decompress 
c.decompress(binary_data)